const autoplayToggle = () => {
  (dispatch, getState) => {
    let {autoplay} = getState();
    autoplay = autoplay === 1 ? 0 : 1
    return {
      type: 'TOGGLE_AUTOPLAY',
      autoplay
    }
  }
}

export default autoplayToggle;