import React, { useState } from "react"
import styled from "styled-components"
import IsoTopeGrid from "react-isotope"

import ShortestPath from "../img/portfolio/thumbnails/shortestPath.jpeg"
import DecistionTree from "../img/portfolio/thumbnails/decisionTree.png"

const Container = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin-top: 20px;
`

const Filter = styled("button")`
  color: #bdc3c7;
  border: 1px solid #bdc3c7;
  padding: 5px 18px;
  display: inline-block;
  margin: 5px;

  background-color: transparent;
  outline: none;

  > input {
    width: 0;
    height: 0;

    &:checked {
      & + label {
        color: blue;
      }
    }
  }

  > label {
    border-bottom: 2px solid transparent;

    &:hover {
      color: blue;
      cursor: pointer;
    }
  }
`

const Card = styled("div")`
  &.algorithms {
  }

  &.test1 {
  }
`

const cardsDefault = [
  {
    id: "visualize dijkstra",
    filter: ["algorithms", "vizualization"],
    img: (                    
    <img
      src={ShortestPath}
      alt="Image"
      height="100%"
      width="100%"
    />),
    languageIcon: <i className="fab fa-react"></i>,
    text: (
      <span>
        Dijkstra <br /> Shortest Path{" "}
      </span>
    ),
    repo: (
      <a
        href="https://github.com/dboles0/Stacks-Queue"
        title="View image"
        className="openButton"
      >
        <i className="fab fa-github"></i>
      </a>
    ),
    VisualizationPage: (
      <a href="algorithm-grid" target="_blank" className="projectLink">
        <i className="fas fa-terminal"></i>
      </a>
    ),
  },
  {
    id: "Data Mining",
    filter: ["vizualization"],
    img: (                    
      <img
        src={DecistionTree}
        alt="Image"
        height="95px"
        width="100%"
      />),
    languageIcon: <i class="fab fa-python"></i>,
    text: <span>Information Gain <br /> Yelp Data Set</span>,
    repo: (
      <a
        href="https://github.com/dboles0/Data_Mining_Group1"
        title="View image"
        className="openButton"
      >
        <i className="fab fa-github"></i>
      </a>
    ),
    VisualizationPage: (
      <a
        href="https://github.com/dboles0/Data_Mining_Group1/blob/master/Project.ipynb"
        target="_blank"
        className="projectLink"
      >
        <i className="fas fa-terminal"></i>
      </a>
    ),
  },
]

const filtersDefault = [
  { label: "all", isChecked: true },
  { label: "algorithms", isChecked: false },
  { label: "vizualization", isChecked: false },
]

const options = {
  settings: {
    autoplaySpeed: 1500,
    transitionSpeed: 900,
  },
  caption: {
    captionColor: "#a6cfa5",
    captionFontFamily: "Raleway, sans-serif",
    captionFontWeight: "300",
    captionTextTransform: "uppercase",
  },
  buttons: {
    iconPadding: "5px",
    showAutoplayButton: false,
    showCloseButton: false,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: "40px",
  },
  thumbnails: {
    showThumbnails: false,
  },
  progressBar: {},
}

export default function Isotope() {
  const [filters, updateFilters] = useState(filtersDefault)

  const onFilter = event => {
    const {
      target: { value, checked },
    } = event

    updateFilters(state =>
      state.map(f => {
        if (f.label === value) {
          return {
            ...f,
            isChecked: checked,
          }
        }

        return f
      })
    )
  }

  return (
    <div className="visualize">
      <div id="portfolio" className="section">
        <div className="heading">
          <h2>Portfolio</h2>
        </div>
        <div className="filters">
          {filters.map(f => (
            <Filter key={`${f.label}_key`}>
              <input
                className="filter"
                id={f.label}
                type="checkbox"
                value={f.label}
                onChange={onFilter}
                checked={f.isChecked}
                key={f.label}
              />
              <label htmlFor={f.label}>{f.label}</label>
            </Filter>
          ))}
        </div>
        <div className="filtered">
          <Container>
            <IsoTopeGrid
              gridLayout={cardsDefault}
              noOfCols={4}
              unitWidth={200}
              unitHeight={100}
              filters={filters}
            >
              {cardsDefault.map(card => (
                <Card key={card.id} className={`card ${card.id}`}>
                  <div className="item">
                    {card.img}
                    <div className="picutre-language">{card.languageIcon}</div>
                    <div className="picture-text">{card.text}</div>
                    <div className="icons">
                      {card.repo}
                      {card.VisualizationPage}
                    </div>

                    <div class="imageOverlay"></div>
                  </div>
                </Card>
              ))}
            </IsoTopeGrid>
          </Container>
        </div>
      </div>
    </div>
  )
}
