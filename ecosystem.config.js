module.exports = {
  apps: [{
    name: 'njs-tutorial',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-52-60-81-201.ca-central-1.compute.amazonaws.com',
      key: '~/.ssh/royalbissell-key-pair-aws-canadacentral.pem',
      ref: 'origin/master',
      repo: 'git@github.com:RoyalBis/njs-tutorial',
      path: '/home/ubuntu/server/njs-tutorial',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}
