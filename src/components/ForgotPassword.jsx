import React, { useState } from "react";
import axios from "axios";
import api from "../api/api";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("success");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${api.API_BASE_URL}/forgot-password`, {
        email,
      });
      setMessage(response.data.message);
      setAlertType("success");
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
              <h2 className="text-start mx-4 mt-4">Forgot Password</h2>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="johndoe@gmail.com"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Reset Link
                </button>
              </form>
              {message && (
                <div className={`alert alert-${alertType}`} role="alert">
                  {message}
                </div>
              )}
              <p className="mt-3 text-center">
                <Link to="/login" className="link">
                  Back to login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
