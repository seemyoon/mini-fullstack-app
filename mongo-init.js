db.createUser(
    {
        user: 'semyon',
        pwd: 'fullstackDB2024',
        roles: [
            {
                role: 'readWrite',
                db: 'mini-fullstack-app'
            }
        ]
    }
)