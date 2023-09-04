import NewsletterForm from "../components/NewsletterForm";

export default function NewsletterPage() {
    
  return (
    <div className="flex items-center flex-col">
      <h3 className="text-center pb-4">Newsletter Page:</h3>
      <div className="w-full max-w-md">
        <NewsletterForm />
      </div>
    </div>
  );
}
