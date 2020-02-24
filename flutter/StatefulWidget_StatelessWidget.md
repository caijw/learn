# StatefulWidget and StatelessWidget

## StatefulWidget

- A stateful widget is implemented by two classes: a subclass of StatefulWidget and a subclass of State.
- The state class contains the widget’s mutable state and the widget’s build() method.
- When the widget’s state changes, the state object calls setState(), telling the framework to redraw the widget.

### Managing state

- The widget manages its own state
- The parent manages the widget’s state
- A mix-and-match approach (父结点管理一部分子节点管理一部分状态)

principles:

- If the state in question is user data, for example the checked or unchecked mode of a checkbox, or the position of a slider, then the state is best managed by the parent widget.
- If the state in question is aesthetic, for example an animation, then the state is best managed by the widget itself.
