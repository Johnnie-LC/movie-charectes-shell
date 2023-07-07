import React, { Suspense, useEffect, useState } from "react"; 
import SafeComponent from './SafeComponent'

export const FederatedComponenteWrap = ({ children, errorLoading } ) => {
  
  const [component, setComponent] = useState(null);
  
  useEffect(() => {
    if(children.type){
      setComponent(children)
    } 
  },[children])
  
  if(errorLoading){
    return <div>{`Error loading module`}</div>
  }  

  return (
  <Suspense fallback={<div>Loading</div>}>
      {component && <SafeComponent>{children}</SafeComponent>}
  </Suspense>
  )
}
