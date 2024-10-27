"use client";

import React, { useState } from "react";
import ReactFlow, { Background, Controls, MiniMap } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  {
    id: "2",
    data: {
      label: "Start",
    },
    position: {
      x: 204.1841400887668,
      y: 70.01657377889777,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 204.1841400887668,
      y: 70.01657377889777,
    },
    dragging: false,
  },
  {
    id: "3",
    data: {
      label: "Read Database",
    },
    position: {
      x: 347.92030507283226,
      y: 136.53693557955785,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 347.92030507283226,
      y: 136.53693557955785,
    },
    dragging: false,
  },
  {
    id: "4",
    data: {
      label: "Write Database",
    },
    position: {
      x: 710.8567587723468,
      y: 474.57470431394563,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 710.8567587723468,
      y: 474.57470431394563,
    },
    dragging: false,
  },
  {
    id: "5",
    data: {
      label: "Welcome Page",
    },
    position: {
      x: 616.9811133834287,
      y: 342.9229655693949,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 616.9811133834287,
      y: 342.9229655693949,
    },
    dragging: false,
  },
  {
    id: "6",
    data: {
      label: "Check If Previously Logged In",
    },
    position: {
      x: 396.44714490205433,
      y: 193.25544634566933,
    },
    width: 150,
    height: 58,
    selected: false,
    positionAbsolute: {
      x: 396.44714490205433,
      y: 193.25544634566933,
    },
    dragging: false,
  },
  {
    id: "7",
    data: {
      label: "If No",
    },
    position: {
      x: 615.847125143681,
      y: 290.3239492989832,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 615.847125143681,
      y: 290.3239492989832,
    },
    dragging: false,
  },
  {
    id: "8",
    data: {
      label: "If Yes",
    },
    position: {
      x: 270.4526547949512,
      y: 287.55471848884264,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 270.4526547949512,
      y: 287.55471848884264,
    },
    dragging: false,
  },
  {
    id: "9",
    data: {
      label: "Create Account",
    },
    position: {
      x: 710.1331701488272,
      y: 410.1799485517927,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 710.1331701488272,
      y: 410.1799485517927,
    },
    dragging: false,
  },
  {
    id: "10",
    data: {
      label: "Log In",
    },
    position: {
      x: 529.7059901515614,
      y: 408.34204250581155,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 529.7059901515614,
      y: 408.34204250581155,
    },
    dragging: false,
  },
  {
    id: "11",
    data: {
      label: "Home",
    },
    position: {
      x: 272.94452320526256,
      y: 477.57361719867714,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 272.94452320526256,
      y: 477.57361719867714,
    },
    dragging: false,
  },
  {
    id: "12",
    data: {
      label: "Any Page",
    },
    position: {
      x: 14.18579477267555,
      y: 288.37282022127846,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 14.18579477267555,
      y: 288.37282022127846,
    },
    dragging: false,
  },
  {
    id: "13",
    data: {
      label: "Header",
    },
    position: {
      x: 20.189340576394713,
      y: 477.78025837398735,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 20.189340576394713,
      y: 477.78025837398735,
    },
    dragging: false,
  },
  {
    id: "14",
    data: {
      label: "Home Button",
    },
    position: {
      x: 133.4133176517334,
      y: 370.4036658265982,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 133.4133176517334,
      y: 370.4036658265982,
    },
    dragging: false,
  },
  {
    id: "15",
    data: {
      label: "Select Browse Assessments",
    },
    position: {
      x: 161.32786716526192,
      y: 568.6103528731732,
    },
    width: 150,
    height: 58,
    selected: false,
    positionAbsolute: {
      x: 161.32786716526192,
      y: 568.6103528731732,
    },
    dragging: false,
  },
  {
    id: "16",
    data: {
      label: "Read Database",
    },
    position: {
      x: 161.05832340734662,
      y: 651.153609900936,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 161.05832340734662,
      y: 651.153609900936,
    },
    dragging: false,
  },
  {
    id: "17",
    data: {
      label: "Display Assessments",
    },
    position: {
      x: 161.31040125620825,
      y: 709.7294129397277,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 161.31040125620825,
      y: 709.7294129397277,
    },
    dragging: false,
  },
  {
    id: "18",
    data: {
      label: "Select Assessment",
    },
    position: {
      x: 160.92422212930867,
      y: 775.4822818888059,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 160.92422212930867,
      y: 775.4822818888059,
    },
    dragging: false,
  },
  {
    id: "19",
    data: {
      label: "Read Database",
    },
    position: {
      x: 160.66413173028542,
      y: 832.598981705936,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 160.66413173028542,
      y: 832.598981705936,
    },
    dragging: false,
  },
  {
    id: "20",
    data: {
      label: "Display Selected Assessment",
    },
    position: {
      x: 158.8304574194506,
      y: 920.6574915128534,
    },
    width: 150,
    height: 58,
    selected: false,
    positionAbsolute: {
      x: 158.8304574194506,
      y: 920.6574915128534,
    },
    dragging: false,
  },
  {
    id: "21",
    data: {
      label: "Early Exit",
    },
    position: {
      x: 355.49877837120636,
      y: 717.5786102797853,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 355.49877837120636,
      y: 717.5786102797853,
    },
    dragging: false,
  },
  {
    id: "22",
    data: {
      label: "Write Database",
    },
    position: {
      x: 355.5676634049525,
      y: 782.3483887400695,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 355.5676634049525,
      y: 782.3483887400695,
    },
    dragging: false,
  },
  {
    id: "23",
    data: {
      label: "Complete Assessment",
    },
    position: {
      x: 268.9194577923478,
      y: 996.3799647839761,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 268.9194577923478,
      y: 996.3799647839761,
    },
    dragging: false,
  },
  {
    id: "24",
    data: {
      label: "If Previously Opened",
    },
    position: {
      x: -15.65773756030567,
      y: 798.3573125914533,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: -15.65773756030567,
      y: 798.3573125914533,
    },
    dragging: false,
  },
  {
    id: "25",
    data: {
      label: "Retrieve and Load Answers From Database",
    },
    position: {
      x: -14.732948821557002,
      y: 868.2932982867445,
    },
    width: 150,
    height: 76,
    selected: false,
    positionAbsolute: {
      x: -14.732948821557002,
      y: 868.2932982867445,
    },
    dragging: false,
  },
  {
    id: "26",
    data: {
      label: "Write Database",
    },
    position: {
      x: 269.03947590817364,
      y: 1055.9450814214092,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 269.03947590817364,
      y: 1055.9450814214092,
    },
    dragging: false,
  },
  {
    id: "27",
    data: {
      label: "Process Results And Send",
    },
    position: {
      x: 398.37507050450614,
      y: 1113.5996728871369,
    },
    width: 150,
    height: 58,
    selected: false,
    positionAbsolute: {
      x: 398.37507050450614,
      y: 1113.5996728871369,
    },
    dragging: false,
  },
  {
    id: "28",
    data: {
      label: "Display Results",
    },
    position: {
      x: 399.0934724066065,
      y: 1196.998821567325,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 399.0934724066065,
      y: 1196.998821567325,
    },
    dragging: false,
  },
  {
    id: "29",
    data: {
      label: "Choose to Share",
    },
    position: {
      x: 400.22740227209044,
      y: 1256.4283909454393,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 400.22740227209044,
      y: 1256.4283909454393,
    },
    dragging: false,
  },
  {
    id: "30",
    data: {
      label: "If Yes",
    },
    position: {
      x: 304.6901327690483,
      y: 1328.1013427355922,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 304.6901327690483,
      y: 1328.1013427355922,
    },
    dragging: false,
  },
  {
    id: "31",
    data: {
      label: "If No",
    },
    position: {
      x: 486.4284454402392,
      y: 1328.4372199497886,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 486.4284454402392,
      y: 1328.4372199497886,
    },
    dragging: false,
  },
  {
    id: "32",
    data: {
      label: "Write to Database as Public",
    },
    position: {
      x: 304.3242247113196,
      y: 1383.7275562339728,
    },
    width: 150,
    height: 58,
    selected: false,
    positionAbsolute: {
      x: 304.3242247113196,
      y: 1383.7275562339728,
    },
    dragging: false,
  },
  {
    id: "33",
    data: {
      label: "Write to Database as Private",
    },
    position: {
      x: 486.3066783551942,
      y: 1382.7147604483314,
    },
    width: 150,
    height: 58,
    selected: false,
    positionAbsolute: {
      x: 486.3066783551942,
      y: 1382.7147604483314,
    },
    dragging: false,
  },
  {
    id: "34",
    data: {
      label: "Home",
    },
    position: {
      x: 396.62173827526914,
      y: 1474.1002935423735,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 396.62173827526914,
      y: 1474.1002935423735,
    },
    dragging: false,
  },
  {
    id: "35",
    data: {
      label: "Browse Shared Assessment Results",
    },
    position: {
      x: 599.6773944913173,
      y: 566.2242772818935,
    },
    width: 150,
    height: 58,
    selected: false,
    positionAbsolute: {
      x: 599.6773944913173,
      y: 566.2242772818935,
    },
    dragging: false,
  },
  {
    id: "36",
    data: {
      label: "Read Database",
    },
    position: {
      x: 599.7333933680578,
      y: 640.029525667405,
    },
    width: 150,
    height: 40,
    selected: false,
    positionAbsolute: {
      x: 599.7333933680578,
      y: 640.029525667405,
    },
    dragging: false,
  },
  {
    id: "37",
    data: {
      label: "Display Shared Assessment Results",
    },
    position: {
      x: 599.6813402243004,
      y: 695.7105089206327,
    },
    width: 150,
    height: 58,
    selected: false,
    positionAbsolute: {
      x: 599.6813402243004,
      y: 695.7105089206327,
    },
    dragging: false,
  },
  {
    id: "38",
    data: {
      label: "Like Shared Assessment",
    },
    position: {
      x: 599.2631274922007,
      y: 773.1918982824651,
    },
    width: 150,
    height: 58,
    selected: false,
    positionAbsolute: {
      x: 599.2631274922007,
      y: 773.1918982824651,
    },
    dragging: false,
  },
  {
    id: "39",
    data: {
      label: "Write Database",
    },
    position: {
      x: 599.5117942648035,
      y: 847.7538088684904,
    },
    width: 150,
    height: 40,
    selected: true,
    positionAbsolute: {
      x: 599.5117942648035,
      y: 847.7538088684904,
    },
    dragging: false,
  },
];

const initialEdges = [
  {
    source: "2",
    sourceHandle: null,
    target: "3",
    targetHandle: null,
    id: "reactflow__edge-2-3",
  },
  {
    source: "3",
    sourceHandle: null,
    target: "6",
    targetHandle: null,
    id: "reactflow__edge-3-6",
  },
  {
    source: "6",
    sourceHandle: null,
    target: "7",
    targetHandle: null,
    id: "reactflow__edge-6-7",
  },
  {
    source: "7",
    sourceHandle: null,
    target: "5",
    targetHandle: null,
    id: "reactflow__edge-7-5",
  },
  {
    source: "5",
    sourceHandle: null,
    target: "10",
    targetHandle: null,
    id: "reactflow__edge-5-10",
  },
  {
    source: "5",
    sourceHandle: null,
    target: "9",
    targetHandle: null,
    id: "reactflow__edge-5-9",
  },
  {
    source: "6",
    sourceHandle: null,
    target: "8",
    targetHandle: null,
    id: "reactflow__edge-6-8",
  },
  {
    source: "8",
    sourceHandle: null,
    target: "11",
    targetHandle: null,
    id: "reactflow__edge-8-11",
  },
  {
    source: "10",
    sourceHandle: null,
    target: "11",
    targetHandle: null,
    id: "reactflow__edge-10-11",
  },
  {
    source: "9",
    sourceHandle: null,
    target: "11",
    targetHandle: null,
    id: "reactflow__edge-9-11",
    selected: false,
  },
  {
    source: "9",
    sourceHandle: null,
    target: "4",
    targetHandle: null,
    id: "reactflow__edge-9-4",
  },
  {
    source: "12",
    sourceHandle: null,
    target: "14",
    targetHandle: null,
    id: "reactflow__edge-12-14",
  },
  {
    source: "14",
    sourceHandle: null,
    target: "11",
    targetHandle: null,
    id: "reactflow__edge-14-11",
  },
  {
    source: "12",
    sourceHandle: null,
    target: "13",
    targetHandle: null,
    id: "reactflow__edge-12-13",
  },
  {
    source: "11",
    sourceHandle: null,
    target: "15",
    targetHandle: null,
    id: "reactflow__edge-11-15",
  },
  {
    source: "13",
    sourceHandle: null,
    target: "15",
    targetHandle: null,
    id: "reactflow__edge-13-15",
  },
  {
    source: "15",
    sourceHandle: null,
    target: "16",
    targetHandle: null,
    id: "reactflow__edge-15-16",
  },
  {
    source: "16",
    sourceHandle: null,
    target: "17",
    targetHandle: null,
    id: "reactflow__edge-16-17",
  },
  {
    source: "17",
    sourceHandle: null,
    target: "18",
    targetHandle: null,
    id: "reactflow__edge-17-18",
  },
  {
    source: "18",
    sourceHandle: null,
    target: "19",
    targetHandle: null,
    id: "reactflow__edge-18-19",
  },
  {
    source: "19",
    sourceHandle: null,
    target: "20",
    targetHandle: null,
    id: "reactflow__edge-19-20",
  },
  {
    source: "20",
    sourceHandle: null,
    target: "21",
    targetHandle: null,
    id: "reactflow__edge-20-21",
  },
  {
    source: "21",
    sourceHandle: null,
    target: "22",
    targetHandle: null,
    id: "reactflow__edge-21-22",
  },
  {
    source: "20",
    sourceHandle: null,
    target: "23",
    targetHandle: null,
    id: "reactflow__edge-20-23",
  },
  {
    source: "19",
    sourceHandle: null,
    target: "24",
    targetHandle: null,
    id: "reactflow__edge-19-24",
  },
  {
    source: "24",
    sourceHandle: null,
    target: "25",
    targetHandle: null,
    id: "reactflow__edge-24-25",
  },
  {
    source: "25",
    sourceHandle: null,
    target: "20",
    targetHandle: null,
    id: "reactflow__edge-25-20",
  },
  {
    source: "23",
    sourceHandle: null,
    target: "26",
    targetHandle: null,
    id: "reactflow__edge-23-26",
  },
  {
    source: "26",
    sourceHandle: null,
    target: "27",
    targetHandle: null,
    id: "reactflow__edge-26-27",
  },
  {
    source: "27",
    sourceHandle: null,
    target: "28",
    targetHandle: null,
    id: "reactflow__edge-27-28",
  },
  {
    source: "28",
    sourceHandle: null,
    target: "29",
    targetHandle: null,
    id: "reactflow__edge-28-29",
  },
  {
    source: "29",
    sourceHandle: null,
    target: "30",
    targetHandle: null,
    id: "reactflow__edge-29-30",
  },
  {
    source: "29",
    sourceHandle: null,
    target: "31",
    targetHandle: null,
    id: "reactflow__edge-29-31",
  },
  {
    source: "30",
    sourceHandle: null,
    target: "32",
    targetHandle: null,
    id: "reactflow__edge-30-32",
  },
  {
    source: "31",
    sourceHandle: null,
    target: "33",
    targetHandle: null,
    id: "reactflow__edge-31-33",
  },
  {
    source: "33",
    sourceHandle: null,
    target: "34",
    targetHandle: null,
    id: "reactflow__edge-33-34",
  },
  {
    source: "32",
    sourceHandle: null,
    target: "34",
    targetHandle: null,
    id: "reactflow__edge-32-34",
  },
  {
    source: "13",
    sourceHandle: null,
    target: "35",
    targetHandle: null,
    id: "reactflow__edge-13-35",
  },
  {
    source: "11",
    sourceHandle: null,
    target: "35",
    targetHandle: null,
    id: "reactflow__edge-11-35",
  },
  {
    source: "35",
    sourceHandle: null,
    target: "36",
    targetHandle: null,
    id: "reactflow__edge-35-36",
  },
  {
    source: "36",
    sourceHandle: null,
    target: "37",
    targetHandle: null,
    id: "reactflow__edge-36-37",
  },
  {
    source: "37",
    sourceHandle: null,
    target: "38",
    targetHandle: null,
    id: "reactflow__edge-37-38",
  },
  {
    source: "38",
    sourceHandle: null,
    target: "39",
    targetHandle: null,
    id: "reactflow__edge-38-39",
  },
];
const Flowchart = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <div style={{ height: "100vh" }}>
      <h1 className="text-4xl font-bold text-center mb-8">Flowchart</h1>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default Flowchart;
