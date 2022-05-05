import AWS from '../images/getStarted/get-started-aws.svg'
import Docker from '../images/getStarted/get-started-docker.svg'
import Azure from '../images/getStarted/get-started-azure.svg'
import Kubernetes from '../images/getStarted/get-started-kubernetes.svg'
import DockerCompose from '../images/getStarted/docker-compose.svg'
import Bash from '../images/getStarted/bash.svg'
import Ansible from '../images/getStarted/Ansible.svg'

export function getCloudImage(id) {
  if (id === 'azure') {
    return Azure
  } else if (id === 'aws') {
    return AWS
  } else if (id === 'docker') {
    return Docker
  } else if (id === 'kubernetes') {
    return Kubernetes
  } else if (id === 'dockerCompose') {
    return DockerCompose
  } else if (id === 'bash') {
    return Bash
  } else if (id === 'ansible') {
    return Ansible
  }

}
