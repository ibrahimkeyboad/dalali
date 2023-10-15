// import User from '@/models/user';
// import getSession from './getSession';
// // import connectDB from '@/db';

// // connectDB();
// async function getCurrentUser() {
//   try {
//     const session = await getSession();
//     if (!session?.user?.email) {
//       return null;
//     }
//     const currentUser = await User.findOne({
//       email: session?.user?.email,
//     });

//     if (!currentUser) {
//       return null;
//     }

//     return currentUser;
//   } catch (error) {
//     return;
//   }
// }

// export default getCurrentUser;
