import { useState } from "react"
import PropTypes from "prop-types"



const TextExpander = ({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "blue",
  expanded = false,
  className = ""

}) => {

  TextExpander.propTypes = {
    collapsedNumWords: PropTypes.number,
    expandButtonText: PropTypes.string,
    collapseButtonText: PropTypes.string,
    buttonColor: PropTypes.string,
    expanded: PropTypes.bool,
    className: PropTypes.string
  }

  const [isExpanded, setIsExpanded] = useState(expanded)
  const text = isExpanded ?
    children :
    children.split(" ").slice(0, collapsedNumWords).join(" ") + "..."


  function handleExpand() {
    setIsExpanded(iE => !iE)
  }

  const ButtonStyle = {
    color: buttonColor,
    background: "none",
    border: "none",
    font: "inherit",
    marginLeft: "4px",
    cursor: "pointer"
  }


  return (
    <div className={className}>
      <span> {text}</span>
      <button onClick={handleExpand} style={ButtonStyle}>
        {isExpanded ? collapseButtonText : expandButtonText}
      </button>
    </div>
  )
}

export default TextExpander


