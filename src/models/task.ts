import { Realm, createRealmContext } from '@realm/react'

export class Task extends Realm.Object {
  _id!: string
  subject!: string
  done!: boolean

  static generate(_id: string,subject: string) {
    return {
      _id,
      subject,
      done: false,
      createdAt: new Date()

    }
  }


  static schema ={
      name: "Task",
      properties: {
        _id: "string",
        subject: "string",
        done: { type: "bool", default: false},
        createdAt: "date"
      },
      primaryKey: "_id",
    }
}

export default createRealmContext ({
  schema: [Task],
  deleteRealmIfMigrationNeeded: true
})
