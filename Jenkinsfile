pipeline {
    agent any
    stages {
        stage ('Init') {
            steps {
                sshagent(['1804b215-19f9-4cdf-a1d7-f55ecf6179f4']) {
                    sh '''
                        [ -d ~/.ssh ] || mkdir ~/.ssh && chmod 0700 ~/.ssh
                        ssh-keyscan -H 89.23.106.12 >> ~/.ssh/known_hosts
                    '''
                    sh "ssh root@89.23.106.12 'cd application/frontend/ && [ -d /root/application/frontend/assistant-frontend ] || git clone https://github.com/TkachenkoVitaliy/assistant-frontend.git'"
                    sh "ssh root@89.23.106.12 'cd application/frontend/assistant-frontend/ && git stash && git pull origin'"
                }
            }
        }

        stage ('Deploy') {
            steps {
                sshagent(['1804b215-19f9-4cdf-a1d7-f55ecf6179f4']) {
                    sh "ssh root@89.23.106.12 'cd application/frontend/assistant-frontend && chmod u+x deploy.sh && ./deploy.sh'"
                }
            }
        }
    }
}