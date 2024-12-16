pipeline {
    agent any

    tools { 
        nodejs "nodeversion18"
    }

    stages {
        stage('Configurar Git Safe Directory') {
            steps {
                script {
                    sh '''
                    git config --global --add safe.directory /home/ecommerce-strapi-backend
                    '''
                }
            }
        }

        stage('Aplicar cambios') {
            steps {
                script {
                    sh '''
                    cd /home/ecommerce-strapi-backend
                    git pull
                    '''
                }
            }
        }

        stage("Finalizar") {
            steps {
                sh "echo 'Pipeline completado correctamente!'"
            }
        }
    }
}
