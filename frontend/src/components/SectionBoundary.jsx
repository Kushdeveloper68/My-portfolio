import { Component } from "react";

/**
 * Wraps a single page section. If that section throws during render
 * (most commonly a WebGL/canvas background failing on an older GPU or
 * a browser with WebGL disabled), only THIS section quietly unmounts —
 * every section below it keeps rendering normally instead of the whole
 * page going blank.
 */
export default class SectionBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    // Log for debugging — doesn't crash the rest of the page.
    console.error(`[SectionBoundary] "${this.props.name || "section"}" failed to render:`, error, info);
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}