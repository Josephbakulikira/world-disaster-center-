import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile, profile } from "../../api/user";
import { toast } from "react-toastify";
import BlogForm from "../../components/blogForm";
import CreatePost from "./createpost";

function AdminPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState();

  const myprofile = async () => {
    const res = await profile();
    if (res?.success) {
      //   console.log(res);
      if (res.user.role === "admin" || res.user.role === "dev") {
        setUser(res.user);
      } else {
        toast.warn("Redirected to home page ! You don't have the permission");
        navigate("/");
        console.log(res);
      }
    } else {
      toast.warn("Redirected to home page ! check your network");
      navigate("/");
    }
  };

  useEffect(() => {
    // navigate("");
    myprofile();
  }, []);

  return (
    <div>
      <br />
      <br />

      {/* <BlogForm /> */}
      <CreatePost />
    </div>
  );
}

export default AdminPage;
