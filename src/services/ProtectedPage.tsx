const ProtectedRoute = ({ children, allowedRoles, userRole }) => {
  if (!allowedRoles.includes(userRole)) {
    return <h1>403 - Forbidden: You do not have access to this page.</h1>;
  }

  return children;
};

export default ProtectedRoute;
