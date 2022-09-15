import { ReactElement } from "react";
import { ScrollView } from "react-native-gesture-handler";

import { COL, SIZE, IPosition } from "./Config";

import Animated, {
  useAnimatedRef,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

import Item from "./Item";

interface IListProps {
  children: ReactElement<{ id: string }>[];
}

export default function List({ children }: IListProps) {
  const scrollView = useAnimatedRef<Animated.ScrollView>();

  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const positions: Animated.SharedValue<IPosition> = useSharedValue(
    Object.assign(
      {},
      ...children.map((child, index) => ({ [child.props.id]: index }))
    )
  );

  return (
    <Animated.ScrollView
      ref={scrollView}
      contentContainerStyle={{
        height: Math.ceil(children.length / COL) * SIZE,
      }}
      onScroll={onScroll}
      showsVerticalScrollIndicator={false}
      bounces={false}
      scrollEventThrottle={16}
    >
      {children.map((child, index) => {
        return (
          <Item
            key={index}
            scrollY={scrollY}
            scrollView={scrollView}
            id={child.props.id}
            positions={positions}
          >
            {child}
          </Item>
        );
      })}
    </Animated.ScrollView>
  );
}
