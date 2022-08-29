import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import {EyeIcon,EyeSlashIcon} from '@heroicons/react/24/outline'
const PasswordInput = ({ label,size }: { label: string,size?:'small'|'medium' }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <div>
      <TextField
        type={showPassword ? "text" : "password"}
        fullWidth
        label={label}
        autoComplete="current-password"
        size={size}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" className="cursor-pointer">
              <IconButton
                onClick={() => setShowPassword((showPassword) => !showPassword)}
              >
                {showPassword ? (
                  <EyeIcon
                    className="w-[25px] h-[25px] "
                  />
                ) : (
                  <EyeSlashIcon
                    
                    className="w-[25px] h-[25px]"
                  />
                )}
                        
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default PasswordInput;
