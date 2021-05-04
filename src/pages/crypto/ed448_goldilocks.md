---
title: ED448-Goldilocks
description: ED448-Goldilocks cryptography for Blockchain
keywords: ed448,goldilocks,ec448,crypto,cryptography
lang: en-US
sidebar: false
link: /en/crypto/ed448-goldilocks
---

# ED448-Goldilocks

Ed448-Goldilocks is a new elliptic curve for cryptography. Specifically, it is the curve:

$y^2 + x^2 \equiv 1 - 39081 \; x^2 y^2 \qquad (mod \; 2^{448} - 2^{224} - 1)$

## Elliptic curve

Elliptic curve cryptography is popular due to its solid performance and small key size. As the mathematics of ECC advances, new curve shapes and implementation techniques are discovered which offer simpler, faster, stronger cryptography. A particularly important advance was Harold Edwards' 2007 discovery of a new curve form. Dan Bernstein, Tanja Lange and other cryptographers soon realized that this form supports faster and simpler operations than older "short Weierstrass" curves.

Most current deployments of ECC use the NIST elliptic curves. While nothing is wrong with these curves per se, they are beginning to show their age. In addition to using the older short Weierstrass form, these curves' moduli were designed for one specific implementation strategy on 32-bit computers. As a result, they perform poorly on 64-bit machines. Even on 32-bit machines, the required strategy is often not very efficient.

As a result, cryptographers have been considering alternative curve designs for some time. Bernstein's 2006 design Curve25519 has achieved a broad acceptance in the security community, and is used in some places that NIST's P-256 curve might be used. However, no stronger design has achieved as broad acceptance. Since mid-2013, I have been involved in discussions with other cryptographers to propose new options for a stronger curve.

## New Goldilocks curve

The discussions of the past year have produced many criteria for the design of a new curve. The SafeCurves criteria are relatively conservative, which is appropriate since a stronger curve should be oriented to conservatism as well as speed. Essentially:

- The design should be a Montgomery, Edwards or twisted Edwards curve. These curves are simpler to implement securely than short Weierstrass curves.
- The curve's order and its twist's order should each be a prime times a small cofactor. The minimal cofactor for these curve forms is 4.
- The curve should not support nontrivial endomorphisms. These allow increased performance and are not known to lead to attacks, but we are trying to be extra conservative.
- The curve should have large CM discriminant and embedding degree.
- The choice of parameters should be rigid, i.e. the lowest possible coefficient should be used.

> An Edwards curve retains the performance advantages of the other forms, but makes it clear how to build a simple, secure implementation.

That leaves the question of prime choice. My goal was to find a curve meeting the SafeCurves criteria which has a strong performance vs security tradeoff. For security reasons, I wanted a prime which was at least 384 bits long and not more than 521 bits. I looked at families of primes which have high performance on a variety of architectures, and the "golden-ratio Solinas" form $2^n - 2^{n/2} - 1$ appeared to be the strongest candidate. This form is efficient whenever the prime is broken up into an even number of limbs, and supports Karatsuba multiplication essentially for free.

## Arithmetic modulo p

To explain in more detail why the chosen p works so well, I will outline an implementation strategy. Most implementations of larger fields use reduced-radix arithmetic, in which the digit size is less than the machine's native word size. For example, instead of using 14 digits of 32 bits each, my implementation of Goldilocks uses 16 digits of 28 bits each.

The advantage of the reduced-radix approach is that carries can accumulate in the upper bits of the word, and do not need to be propagated immediately. The disadvantage is that field elements take more memory, and require more additions and multiplications to process them. In particular, multiply-and-accumulate needs to take about $1-(14/16)^2 = 23\%$ less time in order to make up for the greater number of multiplies; but this is the case on most modern CPUs. Furthermore, element-wise vector additions or subtractions are much faster than handling a carry chain, and the representation can use signed arithmetic more easily than a densely packed one.

## Karatsuba

With fields this size, the Karatsuba multiplication technique becomes useful:

$(aw+b)(cw+d) = acw^2 + ((a+b)(c+d)-ac-bd)w + bd$

This formula works well with reduced-radix implementations, because they compute (a+b) and (c+d) without extra carry propagation. Furthermore, because Karatsuba is a polynomial identity, it does not introduce new carry propagation problems on the product side so long as delayed propagation is used.
