// Este import permite usar css modules para que los estilos no se pisen entre
// componentes. Se importa como un objeto, por ejemplo:
// ".button { ... }" se convierte en un atributo styles.button
import styles from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
