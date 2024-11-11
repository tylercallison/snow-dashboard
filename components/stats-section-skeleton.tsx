import { SkeletonChart } from "@/components/charts/skeleton-chart";

const StatsSectionSkeleton = () => {
  return (
    <section className="col-span-1 my-8 grid grid-cols-1 items-center justify-center gap-4 md:col-span-4 md:my-16 md:grid-cols-2 xl:col-span-6 xl:grid-cols-6">
      <div className="col-span-1 mb-2 md:col-span-2 xl:col-span-6">
        <h2 className="text-3xl font-bold">Lake Statistics</h2>
        {/* <p className="mt-2 h-4 w-1/3 animate-pulse rounded-lg bg-gray-200 text-muted-foreground"></p> */}
      </div>

      <SkeletonChart />
      <SkeletonChart />
      <SkeletonChart />
      <SkeletonChart />
      <SkeletonChart />
      <SkeletonChart />
    </section>
  );
};

export { StatsSectionSkeleton };
