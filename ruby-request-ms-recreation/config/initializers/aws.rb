Aws.config.update({
    region: 'us-west-2',
    credentials: Aws::Credentials.new('requestCK', '1234'),
    endpoint:'http://localhost:8000'
})