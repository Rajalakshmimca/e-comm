import { onAuthStateChanged } from "firebase/auth";
import { useSelector } from "react-redux";
import { auth, db } from "../Firebase/firebase";
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import ShowDetails from "../container/ShowDetails";

const Profile=()=>{
    
    const {profileUserList, loggedUser}=useSelector((state)=>state);
    
    console.log(loggedUser);    
    //console.log(loggedProfile);    

    
        {/*useEffect(()=>{
            const signUpUserRef=query(collection(db, "profiles"),
            orderBy("created", "desc"));
            
            console.log(signUpUserRef);
            onSnapshot(signUpUserRef, (snapshot)=>{
                console.log(snapshot.docs);
                setProfileUser(snapshot.docs.map((doc)=>({
                    id:doc.id,
                    data:doc.data(),
                })));
            })
        },[loggedUser]);
            
    console.log(profileUser);*/}
    
    return(
        <div >
            
            <ShowDetails 
            profileUserList={profileUserList} 
            loggedUser={loggedUser} />
        </div>
    );
}
export default Profile;