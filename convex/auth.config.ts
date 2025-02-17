/**
    * @description      : 
    * @author           : rrome
    * @group            : 
    * @created          : 17/02/2025 - 06:45:19
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 17/02/2025
    * - Author          : rrome
    * - Modification    : 
**/
const authConfig = {
  providers: [
    {
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};

export default authConfig;
