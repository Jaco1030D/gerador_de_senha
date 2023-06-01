import { characters } from '../../const/Texts';
import * as actionTypes from './actions-types';

export const buildActions = (dispatch) => {
  return {
    changeLength: (payload) => dispatch({ type: actionTypes.CHANGELENGTH, payload }),
    changeOptions: (payload) => dispatch({ type: actionTypes.CHANGEOPTIONS, payload }),
    generatePassword: (options, length) => generatePassFn(dispatch, options, length),
  };
};

const generatePassFn = (dispatch, options, length) => {
  let staticPass = '';
  let exclude = false;
  let password = '';
  let counterElements = 0;
  const objectKeys = Object.keys(options);

  objectKeys.forEach((element) => {
    if (element === 'excduplicate' && options[element]) {
      exclude = true;
    } else if (element === 'spaces' && options[element]) {
      staticPass = `  ${staticPass}  `;
    } else {
      if (options[element]) {
        staticPass += characters[element];
        counterElements += 1;
      }
    }
  });
  const results = (message) => {
    const payload = {
      message,
      password,
    };
    dispatch({ type: actionTypes.GENERATEPASS, payload });
  };
  if (counterElements == 1 && length > 25 && exclude) {
    password = 'Error';
    let message = 'O alfabeto possui apenas 26 letras';
    results(message);
    return;
  }
  for (let index = 0; index < length; index++) {
    const randomCharacter = Math.floor(Math.random() * staticPass.length);
    exclude
      ? password.includes(staticPass[randomCharacter])
        ? index--
        : (password += staticPass[randomCharacter])
      : (password += staticPass[randomCharacter]);
  }

  length <= 8
    ? results('Aconselho ter mais que 8 caracteres')
    : length <= 16
    ? results('A senha é boa, mas pode melhorar')
    : results('A senha é forte o suficiente');
};

// const GeneratePassFn = async (dispatch, options, length) => {
//   return await new Promise((resolve, reject) => {
//     let staticPass = '';
//     let exclude = false;
//     let password = '';
//     let counterElements = 0;
//     const objectKeys = Object.keys(options);

//     objectKeys.forEach((element) => {
//       if (element === 'excduplicate' && options[element]) {
//         exclude = true;
//       } else if (element === 'spaces' && options[element]) {
//         staticPass = `  ${staticPass}  `;
//       } else {
//         if (options[element]) {
//           staticPass += characters[element];
//           counterElements += 1;
//         }
//       }
//     });
//     if (counterElements == 1 && length > 25 && exclude) {
//       password = 'Error';
//       reject({
//         message: 'O alfabeto so possui 26 letras',
//         password,
//       });
//       return;
//     }
//     for (let index = 0; index < length; index++) {
//       const randomCharacter = Math.floor(Math.random() * staticPass.length);
//       exclude
//         ? password.includes(staticPass[randomCharacter])
//           ? index--
//           : (password += staticPass[randomCharacter])
//         : (password += staticPass[randomCharacter]);
//     }

//     length <= 8
//       ? resolve({
//           message: 'Aconselho ter mais que 8 caracteres',
//           password,
//         })
//       : length <= 16
//       ? resolve({
//           message: 'A senha é boa, mas pode melhorar',
//           password,
//         })
//       : resolve({
//           message: 'A senha é forte o suficiente',
//           password,
//         });
//   });
// };
