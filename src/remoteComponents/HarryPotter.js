import React from "react";
import { CharactersOne } from '../useFederation/remotes'
import { useFederatedComponent } from "../useFederation/useFederatedComponent";
import { FederatedComponenteWrap } from "../useFederation/FederatedComponentWrap";

const HarryPotter = () => {
  const { Component: RemoteHarryPotter, errorLoading: errorLoadingHarryPotter  } = useFederatedComponent(CharactersOne);

  return(
  <>
  <FederatedComponenteWrap errorLoading={errorLoadingHarryPotter}>
      <RemoteHarryPotter />
  </FederatedComponenteWrap>
  </>
)}

export default HarryPotter