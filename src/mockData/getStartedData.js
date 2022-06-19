const DownloadLinks = [
  {
    "label": "Linux //64-bit//",
    "value": "linux64b",
    "linkToDownLoad": "https://github.com/core-coin/go-core/releases/latest/download/gocore-linux-x86_64",
    "checksum": "https://github.com/core-coin/go-core/releases/latest/download/gocore-linux-x86_64.checksum"
  },
  {
    "label": "Linux //ARM64//",
    "value": "linuxARM64",
    "linkToDownLoad": "https://github.com/core-coin/go-core/releases/latest/download/gocore-linux-arm64",
    "checksum": "https://github.com/core-coin/go-core/releases/latest/download/gocore-linux-arm64.checksum"
  },
  {
    "label": "macOS //64-bit//",
    "value": "macos",
    "linkToDownLoad": "https://github.com/core-coin/go-core/releases/latest/download/gocore-darwin-x86_64",
    "checksum": "https://github.com/core-coin/go-core/releases/latest/download/gocore-darwin-x86_64.checksum"
  },
  {
    "label": "Windows //64-bit//",
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
      },
      {
        label: "Homebrew ",
        id: "homebrew",
        command: "brew tap core-coin/gocore && brew install gocore",
        link: "https://github.com/core-coin/homebrew-gocore"
      },
      {
        label: "Chocolatey ",
        id: "chocolatey",
        command: "choco install go-core",
        link: "https://community.chocolatey.org/packages/go-core"
      }
    ]
  },
  {
    tabName: "Images",
    elements: []
  },
  {
    tabName: "Tools",
    elements: [
      {
        label: "Grafana",
        command: "15957",
        id: "grafana",
        link: "https://grafana.com/grafana/dashboards/15957"
      }
    ]
  },
]
const YandexDownloadLinks = [
  {
    label: "Mainnet",
    link: "https://disk.yandex.com/d/SK2VqMDRZY4Jzw"
  },
  {
    label: "Devin ",
    link: "https://disk.yandex.com/d/nD0gLLtYy7VY3A"
  }
]


export { DownloadLinks, HardwareRequirements, SideBarMenu, NodeDistributionData,YandexDownloadLinks }