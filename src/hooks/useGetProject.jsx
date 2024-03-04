import { useEffect, useState } from "react";
import { db } from "../config/firebase-config";
import {
  query,
  collection,
  where,
  onSnapshot,
  doc,
  getDocs,
  getDoc,
  orderBy,
  limit,
} from "firebase/firestore";

export const useGetProject = () => {
  const [projectList, setProjectList] = useState([]);
  const [projectById, setProjectById] = useState({});
  const [projectTeamList, setProjectTeamList] = useState([]);
  const [projectTeamById, setProjectTeamById] = useState({});
  const getProjectList = async () => {
    const querySnapshot = await getDocs(collection(db, "project"));
    let docs = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;

      docs.push({ ...data, id });
    });
    setProjectList(docs);
  };

  const getProjectTeamList = async () => {
    const querySnapshot = await getDocs(collection(db, "projectteam"));
    let docs = [];
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const id = doc.id;

      docs.push({ ...data, id });
    });
    setProjectTeamList(docs);
  };

  const getProjectById = async (id) => {
    try {
      const docRef = doc(db, "project", `${id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log(data);
        setProjectById(data);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getProjectTeamById = async (id) => {
    try {
      const docRef = doc(db, "projectteam", `${id}`);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log(data);
        setProjectTeamById(data);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjectList();
    getProjectTeamList();
  }, []);
  return {
    projectList,
    projectTeamList,
    getProjectById,
    projectById,
    getProjectTeamById,
    projectTeamById,
  };
};
