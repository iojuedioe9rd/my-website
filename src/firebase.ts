import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


interface FirebaseConfig {
  apiKey: string,
  authDomain: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,}

var firebaseConfig : FirebaseConfig = JSON.parse(atob("eyJhcGlLZXkiOiJBSXphU3lDZ29DTG8taXFqY1lLYklpeFpSWkhYV2FhZ19CQzMxQkUiLCJhdXRoRG9tYWluIjoiY2F0cy1zdHVkaW8td2Vic2l0ZS5maXJlYmFzZWFwcC5jb20iLCJwcm9qZWN0SWQiOiJjYXRzLXN0dWRpby13ZWJzaXRlIiwic3RvcmFnZUJ1Y2tldCI6ImNhdHMtc3R1ZGlvLXdlYnNpdGUuYXBwc3BvdC5jb20iLCJtZXNzYWdpbmdTZW5kZXJJZCI6IjcxOTIzMzk5MTQ5OCIsImFwcElkIjoiMTo3MTkyMzM5OTE0OTg6d2ViOjk2Zjg3MDA4ZWEyOGYwYzRhYTM3YjMiLCJtZWFzdXJlbWVudElkIjoiRy1KTFBHWkdNSFBMIn0"))
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
var c = {app,
  analytics,}

export default c
  
