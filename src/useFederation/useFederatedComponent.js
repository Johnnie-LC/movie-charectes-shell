import { useState, useEffect, lazy } from "react";
import { useDynamicScript } from './useDynamicScript'
import { loadComponent } from "./util";

export const useFederatedComponent = ({ remoteUrl, scope, module}) => {
  const [Component, setComponent] = useState('q');
  const { ready, errorLoading } = useDynamicScript(remoteUrl);
  
  useEffect(() => {
    if (ready && Component === 'q') {
      const Comp = lazy(loadComponent(scope, module));
       setComponent(Comp);
    }
  }, [Component, ready]);

  return { errorLoading, Component };
};