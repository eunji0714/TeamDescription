pipeline {
    agent any
    
    stages {
        
        stage('github-clone') {
            steps {
                git branch: 'BE', credentialsId: 'github_token', url: '{REPOSITORY URL}'
            }
        }
        
   		// stage...
   	}
}
