const DownloadLinks = [
  {
    "label": "Linux",
    "value": "linux",
    "linkToDownLoad": "https://github.com/core-coin/go-core/releases/latest/download/gocore-linux-x86_64",
    "checksum": "https://github.com/core-coin/go-core/releases/latest/download/gocore-linux-x86_64.checksum"
  },
  {
    "label": "Darwin",
    "value": "darwin",
    "linkToDownLoad": "https://github.com/core-coin/go-core/releases/latest/download/gocore-darwin-x86_64",
    "checksum": "https://github.com/core-coin/go-core/releases/latest/download/gocore-darwin-x86_64.checksum"
  },
  {
    "label": "Microsoft Windows",
    "value": "windows",
    "linkToDownLoad": "https://github.com/core-coin/go-core/releases/latest/download/gocore-windows-x86_64.exe",
    "checksum": "https://github.com/core-coin/go-core/releases/latest/download/gocore-windows-x86_64.exe.checksum"
  }
]

const HardwareRequirements = [
  "64-bit Architecture",
  "Just-In-Time //JIT// compilation",
  "4 Cores CPU",
  "4GB RAM //8GB recommended//",
  "Passive or Active Cooler"
]

const SideBarMenu = [
  {
    label: "Core Client",
    link: "coreClient"
  },
  {
    label: "Distribution Clients",
    link: "distributionClients"
  },
  {
    label: "Core Mining",
    link: "coreMining"
  },
  {
    label: "Block Index",
    link: "blockIndex"
  },
  {
    label: "Open Hardware",
    link: "openHardware"
  }
]

const NodeDistributionData = [
  {
    tabName: "Containers",
    elements: [
      {
        label: "Docker",
        command: "docker pull ghcr.io/core-coin/go-core:latest",
        id: "docker",
        link: "https://github.com/core-coin/go-core/pkgs/container/go-core"
      }
    ]
  },
  {
    tabName: "Deployment",
    elements: [
      {
        label: "Docker Compose",
        id: "dockerCompose",
        command: "",
        link: "https://github.com/core-coin/core-docker-compose"
      },
      {
        label: "Bash",
        id: "bash",
        command: "",
        link: "https://github.com/core-coin/core-bash"
      },
      {
        label: "Ansible ",
        id: "ansible",
        command: "",
        link: "https://github.com/core-coin/core-playbook"
      }
    ]
  },
  {
    tabName: "Images",
    elements: []
  },
]

export { DownloadLinks, HardwareRequirements, SideBarMenu, NodeDistributionData }