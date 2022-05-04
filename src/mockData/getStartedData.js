const DownloadLinks = [
  {
    "label": "Linux",
    "value": "linux",
    "linkToDownLoad": "https://github.com/core-coin/go-core/releases/latest/download/gocore-darwin-x86_64",
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
    label: "Distribution clients",
    link: "distributionClients"
  },
  {
    label: "Core Mining",
    link: "coreMining"
  },
  {
    label: "Block index",
    link: "blockIndex"
  },
  {
    label: "Open hardware",
    link: "openHardware"
  }
]

const NodeDistributionData = [
  {
    tabName: "Deployment",
    elements: [
      {
        label: "Docker Compose",
        id: "docker",
        link: "https://github.com/core-coin/core-docker-compose"
      },
      {
        label: "Bash",
        id: "bash",
        link: "https://github.com/core-coin/core-bash"
      }
    ]
  },
  {
    tabName: "Images",
    elements: []
  },
  {
    tabName: "Containers",
    elements: [
      {
        label: "docker pull ghcr.io/core-coin/go-core:latest",
        id: "docker",
        link: "https://github.com/core-coin/go-core/pkgs/container/go-core"
      }
    ]
  }
]

export { DownloadLinks, HardwareRequirements, SideBarMenu, NodeDistributionData }