const Loading = () => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          margin: "auto",
          background: "0 0",
          display: "block",
          shapeRendering: "auto",
        }}
        width={137}
        height={137}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle
          cx={50}
          cy={50}
          fill="none"
          stroke="#7aee43"
          strokeWidth={6}
          r={31}
          strokeDasharray="146.08405839192537 50.69468613064179"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1.5384615384615383s"
            values="0 50 50;360 50 50"
            keyTimes="0;1"
          />
        </circle>
      </svg>
    )
}

export default Loading;
