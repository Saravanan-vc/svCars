const admin = require('../firebase/firebase_config');

const database = admin.firestore();

const addData = (collection, doc, data) => {
    database.collection(collection)
        .doc(doc)
        .get()
        .then((value) => {
            if (value.exists) {
                 const otp = Math.floor(100000 + Math.random() * 900000);
                database
                    .collection(collection)
                    .doc(`${otp}`)
                    .set(data)
                    .then(() => console
                        .log("✅ Firestore write successful!"))
                    .catch((error) => console
                        .error("❌ Firestore write failed:", error));
            } else {
                database
                    .collection(collection)
                    .doc(doc)
                    .set(data)
                    .then(() => console
                        .log("✅ Firestore write successful!"))
                    .catch((error) => console
                        .error("❌ Firestore write failed:", error));
            }
        }).catch((error) => console
            .error("❌ Firestore write failed:", error));
}
module.exports = addData;