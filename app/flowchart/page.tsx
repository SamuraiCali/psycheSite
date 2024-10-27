"use client";

import React, { useState } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: 'start',
    type: 'input',
    data: { label: 'Start' },
    position: { x: 250, y: 0 },
  },
  {
    id: 'welcome',
    data: { label: 'Welcome Page' },
    position: { x: 250, y: 100 },
  },
  {
    id: 'login',
    data: { label: 'Login w/ User & Pass' },
    position: { x: 150, y: 250 },
  },
  {
    id: 'create_acc',
    data: { label: 'Create Account w/ User & Pass' },
    position: { x: 350, y: 250 },
  },
  {
    id: 'home',
    data: { label: 'Home' },
    position: { x: 0, y: 350 },
  },
  {
    id: 'write_db',
    data: { label: 'Write Database' },
    position: { x: 325, y: 550 },
  },
  {
    id: 'read_db',
    data: { label: 'Read Database' },
    position: { x: 175, y: 400 },
  },
  {
    id: 'select_assessment',
    data: { label: 'Browse/Select Assessment' },
    position: { x: 0, y: 450 },
  },
  {
    id: 'take_assesment',
    data: { label: 'Take Assessment' },
    position: { x: 0, y: 525 },
  },
  {
    id: 'recieve_result',
    data: { label: 'Receive Result of Assessment' },
    position: { x: 0, y: 600 },
  },
  {
    id: 'share_summary',
    data: { label: 'Share Summary' },
    position: { x: 0, y: 700 },
  },
  {
    id: 'any',
    data: { label: 'Any Page' },
    position: { x: -100, y: 200 },
  },
  {
    id: 'home_btn',
    data: { label: 'Home Button' },
    position: { x: 0, y: 275 },
  },
  {
    id: 'header',
    data: { label: 'Header' },
    position: { x: -175, y: 275 },
  },
  {
    id: 'view_shared',
    data: { label: 'Browse Shared Summaries' },
    position: { x: -175, y: 475 },
  },
  {
    id: 'read_db2',
    data: { label: 'Read Database' },
    position: { x: -175, y: 375 },
  },

];

const initialEdges = [
  { id: '1', source: 'start', target: 'welcome', markerEnd: {type: 'arrowclosed'}},

  { id: '2', source: 'welcome', target: 'login', markerEnd: {type: 'arrowclosed'} },
  { id: '3', source: 'welcome', target: 'create_acc', markerEnd: {type: 'arrowclosed'} },

  { id: '4a', source: 'login', target: 'home', markerEnd: {type: 'arrowclosed'} },
  { id: '4b', source: 'login', target: 'read_db', markerEnd: {type: 'arrowclosed'} },
  
  { id: '5a', source: 'create_acc', target: 'home', markerEnd: {type: 'arrowclosed'} },
  { id: '5b', source: 'create_acc', target: 'write_db', markerEnd: {type: 'arrowclosed'} },

  { id: '6', source: 'home', target: 'select_assessment', markerEnd: {type: 'arrowclosed'} },
  { id: '6', source: 'home', target: 'read_db', markerEnd: {type: 'arrowclosed'} },
  
  { id: '7a', source: 'read_db', target: 'select_assessment', markerEnd: {type: 'arrowclosed'} },
  { id: '8', source: 'select_assessment', target: 'take_assesment', markerEnd: {type: 'arrowclosed'} },
  
  { id: '9a', source: 'take_assesment', target: 'write_db', markerEnd: {type: 'arrowclosed'} },
  { id: '9b', source: 'take_assesment', target: 'recieve_result', markerEnd: {type: 'arrowclosed'} },
  
  { id: '10b', source: 'recieve_result', target: 'share_summary', markerEnd: {type: 'arrowclosed'} },
  
  { id: '11', source: 'share_summary', target: 'write_db', markerEnd: {type: 'arrowclosed'} },

  { id: '12a', source: 'any', target: 'home_btn', markerEnd: {type: 'arrowclosed'} },
  { id: '12b', source: 'any', target: 'header', markerEnd: {type: 'arrowclosed'} },
  { id: '13', source: 'home_btn', target: 'home', markerEnd: {type: 'arrowclosed'} },

  { id: '14a', source: 'header', target: 'select_assessment', markerEnd: {type: 'arrowclosed'} },
  { id: '14a', source: 'header', target: 'read_db2', markerEnd: {type: 'arrowclosed'} },
  
  { id: '15', source: 'read_db2', target: 'view_shared', markerEnd: {type: 'arrowclosed'} },

];

const Flowchart = () => {
  const [nodes] = useState(initialNodes);
  const [edges] = useState(initialEdges);

  return (
    <div style={{ height: '100vh' }}>
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
