import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

interface Options {
  content: string
  alignment: "left-align" | "centered" | "right-align"
  customClass?: string
}

const defaultOptions: Options = {
  content: "",
  alignment: "centered",
  customClass: "",
}

export default ((userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const StaticSvg: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
    const alignmentStyle = opts.alignment === "centered"
      ? "display: flex; justify-content: center;"
      : opts.alignment === "right-align"
      ? "display: flex; justify-content: flex-end;"
      : "display: flex; justify-content: flex-start;"

    const combinedClasses = [displayClass, opts.customClass].filter(Boolean).join(" ")

    return (
      <div
        class={`static-svg-container ${combinedClasses}`}
        style={alignmentStyle}
        dangerouslySetInnerHTML={{ __html: opts.content }}
      />
    )
  }

  return StaticSvg
}) satisfies QuartzComponentConstructor
