import React from "react";
import styles from "./CyprusRegions.module.scss";

const CyprusRegions = ({ activeRegion }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      id="svgpoint"
      viewBox="0 0 900 725"
      xmlSpace="preserve"
      data-original-viewbox="0 0 900 725"
      style={{ cursor: "initial" }}
      width={"100%"}
    >
      <rect
        id="WATER"
        x={-1}
        y={-1}
        width={900}
        height={726}
        className={styles["map-styles_water"]}
      />
      <g
        id="ISO-CY-06"
        className={`${styles["region"]} ${
          activeRegion === "Kyrenia" && styles["active-region"]
        } `}
        data-qa="ISO-CY-06"
      >
        <path
          id="CY-06"
          d="M273.141,228.896l11.928,4.068l9.72,8.301l12.761-0.168l11.624,5.47   l11.241,0.451l5.911-5.883l1.455,2.008l4.562-0.451l12.563,5.419l5.051,0.54l4.047-3.243h3.491l13.317,5.714l5.117-2.587   l5.99,2.471l4.603-1.518l4.88,2.664l9.588,0.129l6.083,2.793l4.707-1.069l3.425,1.351l2.394-1.801l1.692,1.647l14.428,0.991   l12.802-2.137l6.056,1.854l18.131-5.754h11.862l14.11-5.753l1.904,2.175l13.277-1.763l0,0l1.005,4.234l5.435,1.609l-0.49,2.87   l-3.187,0.824l-1.072,2.96l-8.41,2.304l-3.359-0.992l-2.354,3.372l-23.659,9.615l2.182,5.586l0,0l-2.737,1.107l-4.43-1.969   l-6.705,2.87l-2.565-0.901l4.39-1.686l-5.052-1.145l-5.396,2.214l-11.387-0.825l-4.601,5.046l-0.622,7.633l-21.622,5.38   l-16.609-0.695l-1.759,1.803l-2.87-3.077l-8.715-1.557l-1.071,1.97l-7.339-4.801l-4.086,2.136l-2.077-1.312l-0.515,3.115   l-3.081-0.451l-0.833,4.479l-1.138-1.686l-5.184,0.902l-1.415-4.673l-4.046-2.702l-7.644,0.695l-4.285-3.618l-1.136,1.107   l1.586,2.304l-4.708-2.214l-1.032,4.028l-3.874-2.587l-1.455,2.137l-3.914-2.047l0,0l-9.204,0.992l0,0l-6.89-0.58l-2.976,2.098   l-9.548-4.93l0.238-4.595l-7.432,5.007l-1.521-1.39l-9.508,0.373l-1.177,1.596l-17.575-5.29l0,0l1.138-15.033l-1.455-14.904   l-4.43-6.41l-0.489-18.624L273.141,228.896z"
          className="map-styles_land map-question_hitbox"
          data-type="hitbox-area"
        />
      </g>
      <g
        id="ISO-CY-04"
        className={`${styles["region"]} ${
          activeRegion === "Famagusta" && styles["active-region"]
        } `}
        data-qa="ISO-CY-04"
      >
        <path
          id="CY-04_1_"
          d="M846.209,104.783l-5.567,10.4l0.621,6.152l-4.007,5.651l-9.508,0.992   l-1.39,2.252l-6.228,0.167l-6.057,4.826l-9.933,1.854l-14.494,10.515l-5.527,14.621l-3.425,0.657l-7.195,6.628l-7.326,2.227   l-23.698,21.404l-33.801,14.647l-18.673,12.137l-19.586,20.555l-1.969,11.506l-3.77,5.135l-17.879,2.832l-5.078-2.832l-7.473,1.03   l-11.73,8.546l-13.21,21.803l-1.283,20.144l4.113,11.107l-0.556,3.115l1.388,2.999l2.632,0.412l5.329,10.734l4.153,0.579l0.49,1.48   l-2.314-0.489l1.388,1.685l2.115-0.45l2.142,7.246l9.403,13.102l13.105,10.117l9.957,14.325l3.386,1.429l-0.106,4.015l5.158,6.5   l-2.911,2.419l2.209,5.355l3.042,0.695l0.661,2.007l-0.767,2.124l-3.386-3.475l-3.279,2.42l-4.113-3.81l-8.886-2.613l-4.602-3.565   l-11.52,0.489l-4.192-2.497l-4.536,0.773l-0.515,2.535l-2.42-0.823l-16.425,5.2l0,0l-3.597,1.106l-3.81-1.427l-4.906-15.458   l-15.393,0.451l-3.743-3.193l-10.579-0.077l1.138-2.535l-4.775-0.528l-0.132-3.36l-5.264-3.154l-0.278-4.337l-4.629-2.703   l-8.953,5.521l-2.869-4.749l3.835-8.765l-1.521-1.557l-5.845,4.994l-4.496,0.283l-1.31,3.115l-7.339,0.979l-1.31-16.179   l-9.548-5.534l-1.244-2.947l-9.415,2.007l0,0l-2.288-5.444l-12.484-1.97l-3.293-6.023l8.649-8.405l1.243-3.449l-4.536-19.114   l5.607-3.616l-1.864-4.312l-3.703-1.647l-1.561-14.609l0,0l-2.182-5.586l23.659-9.614l2.354-3.372l3.359,0.991l8.41-2.304   l1.072-2.961l3.187-0.823l0.49-2.87l-5.435-1.609l-1.005-4.235l0,0l1.389-1.892l3.213,0.657l7.128-3.089l7.921-7.516l22.006-10.567   l27.124,0.283l10.275-3.166l3.386-3.038l3.385,0.747l6.534-2.265l0.621-1.815l5.118,0.245l5.633-4.158l8.61-0.489l17.601-10.078   l6.441-1.197l12.114-9.383l2.736,0.695l12.974-4.57l10.169-14.415l4.946-2.304l2.698-6.924l5.118,2.265l4.39-0.077l1.587-1.982   l1.799,2.471l2.354-2.226l3.359,1.609l6.612-5.804l4.218,0.206l5.951-3.913l3.531,1.519l10.408-6.59l2.354-5.238l2.38,1.48   l4.192-3.951l0.239-5.277l7.577-1.196l5.739-4.248l8.437,0.167l10.619-8.456l7.816,1.274l6.4-3.179l3.465,0.489l4.773-4.003   l0.318-3.089l6.534,2.266l4.774-3.012l2.287-4.208L846.209,104.783z"
          className="map-styles_land map-question_hitbox"
          data-type="hitbox-area"
        />
      </g>
      <g
        id="ISO-CY-05"
        className={`${styles["region"]} ${
          activeRegion === "Paphos" && styles["active-region"]
        } `}
        data-qa="ISO-CY-05"
      >
        <path
          id="CY-05"
          d="M143.937,321.193l2.804,0.244l0,0l5.779,3.848l4.496,6.268l6.362,3.038   l-0.066,6.679l7.815,3.077v13.848l-2.248,2.381l-4.113-0.373l-2.936,5.779l2.975,0.772l3.875,9.048l9.27,2.947l2.248,7.285   l2.592,0.978l2.46,4.994l0.317,2.819l-3.107,3.925l3.081,0.734l1.071,7.04l-2.525,4.131l0.238,5.599l-4.086,1.185l1.626,9.447   l3.491,2.085l3.28,6.049l1.349-7.066l6.851,1.068l-4.774,3.758l8.543,3.269l4.113-10.091l2.46-1.763l6.229,2.406l0.172,3.398   l3.768-1.184l0,0l1.138,6.332l5.885,1.506l0.555,4.775l-13.833,10.579l-1.627,9.267l-7.538,2.935l-2.592,7.516l-2.87-0.978   l-3.914,4.002l2.143,1.262l-0.344,3.102l4.456,0.901l2.632,3.668l-1.692,0.734l-1.587,8.521l-6.534,1.712l-6.254,6.564   l-6.123,0.695l-1.005,5.831l-6.255,2.896l2.698,5.418l-0.384,12.923l0,0l-12.484-4.08l-7.26-5.909l-12.735-6.319l-8.159,0.038   l-5.356-3.989l-7.127,1.673l-15.883-12.562l-4.906-0.412l-6.533-8.444l-5.29,0.322l2.288-4.736l-1.931-7.632l-2.46-2.047   l-1.905-20.168l-2.354-2.986l-4.364-0.129l-0.555-3.025l-2.009,1.313l-0.45-2.369l-4.219,0.206l-2.077-6.371l-8.688-10.914   l3.081-4.17l0.067-5.972l-4.457-9.357l-3.597-1.106l0.039-3.398l2.314,0.733l1.693-2.458l-1.494-2.741l1.494-10.554l-6.189-8.842   l-2.142,0.322l-6.123-12.806l0.515-16.707l1.071-4.054l3.187-2.588l6.017,5.895l0.582,3.193l18.753,14.775l14.56,3.399   l10.487-2.497l16.98-12.24l9.231-13.965l5.845-13.888l5.673-3.642l3.743-8.533l1.666-0.657L143.937,321.193z"
          className="map-styles_land map-question_hitbox"
          data-type="hitbox-area"
        />
      </g>
      <g
        id="ISO-CY-03"
        className={`${styles["region"]} ${
          activeRegion === "Larnaca" && styles["active-region"]
        } `}
        data-qa="ISO-CY-03"
      >
        <path
          id="CY-03_1_"
          d="M502.161,345.737l9.416-2.008l1.243,2.948l9.549,5.534l1.309,16.179   l7.339-0.991l1.309-3.101l4.496-0.297l5.845-4.994l1.521,1.557l-3.836,8.765l2.87,4.749l8.966-5.534l4.629,2.702l0.278,4.338   l5.263,3.154l0.132,3.359l4.773,0.528l-1.136,2.548l10.579,0.077l3.743,3.193l15.393-0.451l4.906,15.458l3.808,1.441l3.597-1.106   l0,0l-3.701,6.293l-11.453,4.544l-9.655-8.224l-18.395-6.912l-14.917-0.979l-18.29,4.042l-7.961,5.367l-3.769,5.715l-1.733,5.071   l1.733,2.626l-1.415-0.862l0.411,4.736l-1.799,1.185l0.04,19.744l-10.342,12.407l-2.01,7.838l-6.982-1.995l-10.831,0.566   l-17.92,13.347l-1.521,3.63l-8.371,0.528l-14.917,4.865l-4.391,4.441l-7.644,1.879l-8.159,6.488l-8.173,0.077l-7.564,4.852   l-3.253,0.078l1.243,1.429l-5.092-3.502l-5.567-0.207l-4.179,2.368l0,0l-2.671-8.61l2.565-15.496l-5.501-9.628l-6.982-3.849   l-1.97-5.624l-9.032-8.251l-7.895-0.695l-6.468-3.552l-6.678,0.489l-1.269-2.291l-5.396-0.695l2.103-9.55l0,0l6.189-6.126   l6.03-0.747l-0.767-3.025l2.698-2.484l3.597,3.591l1.587-1.995l2.91,0.321l1.111,3.643l13.383-3.077l-0.754,2.458l4.946,0.283   l0.066,3.759l-1.904,1.068l5.157,0.078l14.666-10.619l1.309-5.071l6.229-5.354l5.185,3.101l1.15,3.153l11.347-3.436l7.842,2.497   l3.187-1.725l3.187-6.783l-1.732-9.486l4.84,0.773l8.2,5.161l7.749-5.934l10.209,4.788l-0.766-6.024l4.496-3.179l-0.449-7.246   l2.592,0.862l0.278-3.36l-2.869-0.811l-4.629-15.6h-4.602l1.548-7.413l7.168-5.277l-1.732-5.444l7.128-6.023l5.052,1.351   l1.931,3.437l12.074,2.741L502.161,345.737z"
          data-type="hitbox-area"
        />
      </g>
      <g
        id="ISO-CY-02"
        className={`${styles["region"]} ${
          activeRegion === "Limassol" && styles["active-region"]
        }`}
        data-qa="ISO-CY-02"
        data-color={2}
      >
        <path
          id="CY-02"
          d="M217.333,428.805l2.631-12.394l-1.005-3.964l1.428-1.879l5.25,0.09   l2.248-4.427l15.883,6.95l4.39-0.322l2.831,3.436l9.654-0.862l7.749,2.008l13.7-8.92l12.59,1.931l6.679,9.036l11.307,4.17   l3.319,8.494l4.497,3.437l4.232-3.269l4.946-0.541l4.774,1.313l1.891,3.347l6.057,1.029l0,0l-2.103,9.55l5.396,0.695l1.269,2.291   l6.678-0.489l6.468,3.552l7.895,0.695l9.032,8.251l1.97,5.624l6.982,3.849l5.501,9.628l-2.565,15.496l2.671,8.61l0,0l-1.6,4.03   l-3.902,1.221l-22.653-0.322l-15.816-2.857l-28.71,10.27l-7.776,7.879l-3.571-0.091l-3.425,3.385l0.621,3.873l-2.658-1.801   l-3.769,12.51l0.859,12.048l9.482,10.386l-2.975,1.957l-18.54-4.312l-3.359,2.149l-5.912-1.093l-4.84,1.66l2.552-3.205   l-0.926-6.473l-5.051-11.404l-4.642-7.658l-12.272-11.609l-8.992-1.146l-1.944,2.445l-6.335-1.545l-1.692,2.11l-9.747-1.017   l-6.03,3.025h-4.774l-5.118,4.068l-8.093-1.262l-1.931,3.295l-4.325,0.411l-8.715-4.608l-10.725-2.561l0,0l0.383-12.923   l-2.697-5.418l6.255-2.896l1.005-5.831l6.123-0.695l6.256-6.564l6.546-1.712l1.587-8.522l1.692-0.733l-2.632-3.681l-4.456-0.901   l0.344-3.089l-2.143-1.274l3.901-4.003l2.883,0.991l2.592-7.516l7.538-2.935l1.626-9.267l13.833-10.579l-0.555-4.788l-5.871-1.506   L217.333,428.805z"
          className="map-styles_land map-question_hitbox"
          data-type="hitbox-area"
        />
      </g>
      <g
        id="ISO-CY-01"
        className={`${styles["region"]} ${
          activeRegion === "Nicosia" && styles["active-region"]
        }`}
        data-qa="ISO-CY-01"
      >
        <path
          id="CY-01_1_"
          d="M274.449,281.396l17.575,5.29l1.178-1.596l9.508-0.373l1.521,1.39   l7.432-5.008l-0.238,4.595l9.548,4.93l2.976-2.098l6.89,0.579l0,0l9.204-0.991l0,0l3.914,2.046l1.454-2.136l3.875,2.587   l1.031-4.028l4.709,2.214l-1.587-2.304l1.137-1.107l4.284,3.617l7.644-0.695l4.047,2.702l1.415,4.672l5.184-0.9l1.138,1.686   l0.833-4.48l3.081,0.451l0.515-3.115l2.077,1.312l4.086-2.136l7.339,4.801l1.072-1.97l8.715,1.557l2.87,3.077l1.759-1.802   l16.61,0.695l21.622-5.38l0.621-7.632l4.602-5.045l11.386,0.824l5.395-2.214l5.052,1.146l-4.391,1.686l2.566,0.901l6.704-2.871   l4.43,1.97l2.737-1.107l0,0l1.561,14.609l3.703,1.647l1.865,4.312l-5.608,3.616l4.536,19.114l-1.243,3.449l-8.649,8.405   l3.292,6.023l12.484,1.97l2.289,5.444l0,0l-4.946,8.56l-12.074-2.741l-1.931-3.436l-5.052-1.352l-7.128,6.024l1.732,5.444   l-7.167,5.278l-1.56,7.414h4.601l4.629,15.599l2.87,0.823l-0.278,3.36l-2.592-0.862l0.45,7.246l-4.496,3.192l0.767,6.011   l-10.21-4.788l-7.749,5.934l-8.2-5.148l-4.84-0.772l1.733,9.485l-3.187,6.784l-3.187,1.712l-7.855-2.497l-11.347,3.436   l-1.137-3.153l-5.184-3.102l-6.229,5.354l-1.309,5.071l-14.666,10.631l-5.158-0.077l1.905-1.068l-0.066-3.758l-4.946-0.283   l0.767-2.446l-13.383,3.063l-1.111-3.642l-2.91-0.322l-1.587,2.008l-3.597-3.591l-2.698,2.496l0.767,3.025l-6.017,0.733   l-6.19,6.127l0,0l-6.056-1.017l-1.904-3.346l-4.774-1.312l-4.946,0.527l-4.219,3.269l-4.497-3.436l-3.319-8.495l-11.307-4.171   l-6.678-9.035l-12.59-1.918l-13.7,8.919l-7.75-2.007l-9.653,0.862l-2.844-3.436l-4.39,0.322l-15.883-6.951l-2.248,4.415   l-5.263-0.077l-1.415,1.879l1.005,3.964l-2.632,12.382l0,0l-3.769,1.184l-0.172-3.398l-6.229-2.407l-2.46,1.763l-4.113,10.091   l-8.543-3.269l4.774-3.758l-6.85-1.069l-1.349,7.067l-3.28-6.049l-3.491-2.085l-1.627-9.447l4.086-1.184l-0.238-5.599l2.526-4.132   l-1.071-7.04l-3.081-0.733l3.108-3.926l-0.318-2.818l-2.46-4.994l-2.592-0.979l-2.248-7.284l-9.271-2.948l-3.875-9.048   l-2.975-0.773l2.936-5.779l4.113,0.374l2.248-2.381V344.36l-7.816-3.076l0.066-6.68l-6.36-3.038l-4.497-6.268l-5.779-3.848l0,0   l7.988-3.527l5.224,0.206l6.189-5.87l2.487,1.481l4.536-2.42l8.649,0.283l3.425,2.999l20.854,2.87l2.077,2.793l13.145,4.711   l4.193,4.093l10.487,4.749l5.118-1.029l14.772-7.786l5.991-6.268l5.051-9.846L274.449,281.396z"
          className="map-styles_land map-question_hitbox"
          data-type="hitbox-area"
        />
      </g>
      <linearGradient id="MyGradient">
        <stop offset="5%" stopColor="#A824E6" />
        <stop offset="95%" stopColor="#7957FF" />
      </linearGradient>
    </svg>
  );
};

export default CyprusRegions;