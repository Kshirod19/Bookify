import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Initialize Firebase Context
const FirebaseContext = createContext(null);

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBANuZRXNFzSNxyMAagWDH2INUpYBcYhHc",
  authDomain: "bookify-4da1b.firebaseapp.com",
  projectId: "bookify-4da1b",
  storageBucket: "bookify-4da1b.appspot.com",
  messagingSenderId: "1040037251482",
  appId: "1:1040037251482:web:435d1ef946ec3bdc9ed223",
};

// Initialize Firebase App
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Handle Authentication State
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      setUser(user || null);
    });
    return () => unsubscribe();
  }, []);

  // Sign Up with Email & Password
  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  // Sign In with Email & Password
  const signinUserWithEmailAndPassword = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  // Sign In with Google
  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  // Logout
  const logout = () => signOut(firebaseAuth);

  // Create a New Book Listing
  const handleCreateNewListing = async (name, isbn, price, coverPic) => {
    const imageRef = ref(
      storage,
      `uploads/images/${Date.now()}-${coverPic.name}`
    );
    const uploadResult = await uploadBytes(imageRef, coverPic);
    await addDoc(collection(firestore, "books"), {
      name,
      isbn,
      price,
      imageURL: uploadResult.ref.fullPath,
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  // List All Books
  const listAllBooks = () => getDocs(collection(firestore, "books"));

  // Get Book by ID
  const getBookById = async (id) => {
    const docRef = doc(firestore, "books", id);
    return getDoc(docRef);
  };

  // Get Image URL from Firebase Storage
  const getImageURL = (path) => getDownloadURL(ref(storage, path));

  // Place Order for a Book
  const placeOrder = async (bookId, qty) => {
    const collectionRef = collection(firestore, "books", bookId, "order");
    return addDoc(collectionRef, {
      userID: user.uid,
      userEmail: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      qty: Number(qty),
    });
  };

  // Fetch Books by User ID
  const fetchMyBooks = async (userId) => {
    const q = query(
      collection(firestore, "books"),
      where("userID", "==", userId)
    );
    return getDocs(q);
  };

  // Fetch Orders for a Book
  const getOrders = async (bookId) => {
    const collectionRef = collection(firestore, "books", bookId, "order");
    return getDocs(collectionRef);
  };

  const isLoggedIn = !!user;

  return (
    <FirebaseContext.Provider
      value={{
        signupUserWithEmailAndPassword,
        signinUserWithEmailAndPassword,
        signinWithGoogle,
        handleCreateNewListing,
        listAllBooks,
        getImageURL,
        getBookById,
        placeOrder,
        fetchMyBooks,
        getOrders,
        logout,
        isLoggedIn,
        user,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};
