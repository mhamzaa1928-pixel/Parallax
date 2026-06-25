type PageTitleProps = {
  badge?: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
};

export default function PageTitle({
  badge,
  title,
  description,
  action,
}: PageTitleProps) {
  return (
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div>
        {badge && (
          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
            {badge}
          </span>
        )}

        <h1 className="mt-4 text-5xl font-bold tracking-[-0.04em] text-neutral-900">
          {title}
        </h1>

        {description && (
          <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-500">
            {description}
          </p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}