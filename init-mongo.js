db.createUser(
    {
        user    : "demo",
        pwd     : "farm",
        roles   : [
            {
                role    : "readWrite",
                db      : "farm-demo"
            }
        ]
    }
)