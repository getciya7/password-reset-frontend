import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../api/api";

const ResetPassword = () => {
  const { token } = useParams();
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [Back, setBack] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== cpassword) {
      setMessage("Password do not match");
      setAlertType("warning");
      return;
    }
    try {
      const response = await axios.put(
        `${api.API_BASE_URL}/reset-password/${token}`,
        { password }
      );
      setMessage(response.data.message);
      setAlertType("success");
      setBack(
        <p className="mt-3 text-center">
          <Link to="/login" className="link">
            Back to login
          </Link>
        </p>
      );
    } catch (error) {
      setMessage(error.response.data.message);
      setAlertType("danger");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-head">
              <h2 className="text-start mx-4 mt-4">Reset Password</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="Enter new password"
                  />
                </div>
                <div className="form-group">
                  <label>Confrim New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={cpassword}
                    onChange={(e) => setcPassword(e.target.value)}
                    placeholder="Confrim new password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Reset Password
                </button>
              </form>
              {message && (
                <div className={`alert alert-${alertType}`} role="alert">
                  {message}
                </div>
              )}
              {Back}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
