// Temporary stub to avoid build error: empty file is not a module
// Redirects to home for now; replace with real content or remove the route.
import { redirect } from "next/navigation";

export default function MainPage() {
	redirect("/");
}
