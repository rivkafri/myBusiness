import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

export const Admin = () => {
  return (
    <div>
      <button><Link to={`/Business`}>Business</Link></button>
      <button><Link to={`/Services`}>Services</Link></button>
      <button><Link to={`/meetings`}>meetings</Link></button>
    </div >
  );
};
