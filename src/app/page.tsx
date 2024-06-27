import HomeComponent from "@/components/home";

export default function Home({ searchParams }: { searchParams: { pageNumber: string } }) {
  const pageNumber = Number(searchParams.pageNumber) || 1;

  return (
    <HomeComponent pageNumber={pageNumber} />
  );
}