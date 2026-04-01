interface HeadlineProps {
  children: React.ReactNode;
}

export function Headline({ children }: HeadlineProps) {
  return <h3 className="m-0">{children}</h3>;
}
