interface HeadlineProps {
  children: React.ReactNode;
}

export function Headline({ children }: HeadlineProps) {
  return <h3 className="flex my-0 mb-2">{children}</h3>;
}
