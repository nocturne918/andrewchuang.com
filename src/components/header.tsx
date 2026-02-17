export function Header() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Andrew Chuang Saladin</h1>
      <p className="py-4 space-y-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-prose">
        I'm a student studying CS and Math at{" "}
        <a
          href="https://www.ufl.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: "#22d3ee" }}
        >
          University of Florida
        </a>
        . I am involved with{" "}
        <a
          href="https://www.ufsase.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: "#22d3ee" }}
        >
          UF SASE
        </a>{" "}
        and{" "}
        <a
          href="https://cur.aa.ufl.edu/programs-university-research-scholars-program/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: "#22d3ee" }}
        >
          URSP
        </a>
        .
        <br />
        My favorite projects involve web development, agentic workflows, and
        data analysis.
        <br />
        Outside of tech, I think about self-hosting, Linux, tennis, aviation,
        and food. I'm also trying to strengthen my knowledge in trading,
        cycling, electronics, and design.
        <br />
        Feel free to reach out to me at{" "}
        <a
          href="mailto:andrewchuangsaladin@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: "#22d3ee" }}
        >
          andrewchuangsaladin@gmail.com
        </a>{" "}
        or check out my{" "}
        <a
          href="files/ACS_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
          style={{ color: "#22d3ee" }}
        >
          resume
        </a>
        .
        <br />
        <br />
        More blogs, projects, and projects will be added soon, so be sure to
        check back soon! - Andrew 02/17/2026
      </p>
    </div>
  );
}
