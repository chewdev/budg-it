import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// //child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });

//         console.log(expenses);
// });

// database.ref('expenses').push({
//     description: 'car payment',
//     note: '',
//     amount: 30000,
//     createdAt: 0
// });


// const dataID = database.ref('notes').push({
//     title: 'courses',
//     body: 'react, node, mongodb'
// });


// const firebaseNotes = {
//     notes: {
//         id1: {
//             title: 'First note!',
//             body: 'my note'
//         },
//         id2: {
//             title: 'Another note',
//             body: 'another n'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'my note'
// }, {
//     id: '762ase',
//     title: 'Another note',
//     body: 'another n'
// }];

// database.ref('notes').set(firebaseNotes);

//   database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   });

//   setTimeout(() => {
//     database.ref().update({
//     name: 'Bob'
//   })}, 2000);

//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
//   }, (e) => {
//     console.log('Error with fetching data', e);
//   });

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);
//   database.ref().set({
//       name: 'Chris Ewald',
//       age: 28,
//       stressLevel: 5,
//       job: {
//           title: 'Software Developer',
//           company: 'Netflix'
//         },
//       location: {
//           city: 'LA',
//           country: 'United States'
//       }
//   }).then(() => {
//       console.log('data saved.');
//   }).catch((error) => {
//       console.log('Failed: ', error);
//   });

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Google',
//     'location/city': 'Seattle'
//   });

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((error) => {
//         console.log('error fetching data ', error)
//     });

// database.ref('isSingle').set(null);

// database.ref().remove().then(() => {
//     console.log('data removed');
// }).catch((error) => {
//     console.log('error', error);
// });