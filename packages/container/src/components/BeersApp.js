import {mount} from 'beers/BeersApp';
import React, {useRef, useEffect} from "react";
import {useHistory} from 'react-router-dom';

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      onNavigate: ({pathname: newPathname}) => {
        const {pathname} = history.location;

        console.log('newPathName', newPathname);
        console.log('pathName', pathname);

        if (pathname !== newPathname) {
          history.push(newPathname)
        }
      }
    });

    history.listen(onParentNavigate);

  }, []);

  return <div ref={ref}/>
};
