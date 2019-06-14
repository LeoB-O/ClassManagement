pipeline {
    agent { docker 'node:6.3' }
    stages {
        stage('build') {
            steps {
                sh 'npm install npx'
                sh 'npm run build'
            }
        }
    }
}