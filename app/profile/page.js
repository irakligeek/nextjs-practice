import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";
export default withPageAuthRequired(function ProfilePage() {
    return <h3>You will only see this page if you login</h3>
});
